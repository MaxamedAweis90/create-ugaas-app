#!/usr/bin/env node

import {
  intro,
  outro,
  text,
  select,
  isCancel,
  cancel,
  note,
  log,
} from "@clack/prompts";
import ora from "ora";
import picocolors from "picocolors";
import degit from "degit";
import path from "path";
import fs from "fs/promises";
import fsSync from "fs";
import { fileURLToPath } from "url";

// GitHub repository holding the starter templates
const GITHUB_REPO = "MaxamedAweis90/ugaas-templates";

/**
 * Handle cancellation gracefully if the user presses Ctrl+C or ESC
 */
function handleCancel(value) {
  if (isCancel(value)) {
    cancel(picocolors.yellow("Scaffolding cancelled."));
    process.exit(0);
  }
}

/**
 * Progress & Logging Engine
 * Manages step-by-step actions and future component injections
 */
export class ProgressEngine {
  constructor() {
    this.activeSpinner = null;
  }

  /**
   * Start a step spinner
   * @param {number} current
   * @param {number} total
   * @param {string} title
   */
  startStep(current, total, title) {
    const text = picocolors.bold(`[${current}/${total}]`) + ` ${title}`;
    this.activeSpinner = ora({
      text,
      color: "cyan",
      spinner: "dots",
    }).start();
    return this.activeSpinner;
  }

  /**
   * Complete current step with success
   * @param {string} [message]
   */
  succeedStep(message) {
    if (this.activeSpinner) {
      if (message) {
        this.activeSpinner.succeed(picocolors.green(message));
      } else {
        this.activeSpinner.succeed();
      }
      this.activeSpinner = null;
    }
  }

  /**
   * Fail current step with error
   * @param {string} message
   */
  failStep(message) {
    if (this.activeSpinner) {
      this.activeSpinner.fail(picocolors.red(message));
      this.activeSpinner = null;
    }
  }

  /**
   * Log and spin for component downloads (structured for future component injections)
   * @param {string} componentName
   */
  downloadComponent(componentName) {
    const text = `Downloading component: ${picocolors.bold(picocolors.magenta(componentName))}...`;
    const spinner = ora({
      text,
      color: "magenta",
      spinner: "dots",
    }).start();

    return {
      succeed: (msg = `Downloaded component: ${componentName}`) =>
        spinner.succeed(picocolors.green(msg)),
      fail: (msg = `Failed downloading component: ${componentName}`) =>
        spinner.fail(picocolors.red(msg)),
    };
  }
}

async function main() {
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    console.log();
    intro(
      picocolors.bgCyan(picocolors.black(" create-ugaas-app ")) +
        " " +
        picocolors.cyan("🚀 Modern fullstack starter generator")
    );
    console.log(picocolors.bold("\nUsage:"));
    console.log(`  ${picocolors.cyan("pnpm create ugaas-app")} ${picocolors.dim("[project-name]")}`);
    console.log(`  ${picocolors.cyan("npx create-ugaas-app")} ${picocolors.dim("[project-name]")}`);
    console.log(picocolors.bold("\nPlatforms:"));
    console.log(`  ${picocolors.magenta("vite")} - Fast, modern web frontend with React`);
    console.log(`  ${picocolors.magenta("expo")} - Cross-platform iOS and Android mobile app`);
    console.log(picocolors.bold("\nStarter Archetypes:"));
    console.log(`  Ecommerce, Finance, Productivity, Delivery, CMS\n`);
    process.exit(0);
  }

  console.log();
  intro(
    picocolors.bgCyan(picocolors.black(" create-ugaas-app ")) +
      " " +
      picocolors.cyan("🚀 Modern fullstack starter generator")
  );

  // Default project name from argument if provided
  const cliArgName = process.argv[2] && !process.argv[2].startsWith("-")
    ? process.argv[2]
    : undefined;

  // Prompt 1: Project Name
  const projectName = await text({
    message: "What is your project name?",
    placeholder: "my-ugaas-app",
    defaultValue: cliArgName || "my-ugaas-app",
    validate(val) {
      const trimmed = val ? val.trim() : "";
      if (!trimmed) return "Project name cannot be empty.";
      if (!/^[a-zA-Z0-9-_]+$/.test(trimmed)) {
        return "Project name can only contain letters, numbers, dashes, and underscores.";
      }
    },
  });
  handleCancel(projectName);

  const formattedProjectName = projectName.trim();
  const targetPath = path.resolve(process.cwd(), formattedProjectName);

  // Check if directory already exists
  try {
    const files = await fs.readdir(targetPath);
    if (files.length > 0) {
      log.warn(
        picocolors.yellow(
          `Directory "${formattedProjectName}" already exists and is not empty.`
        )
      );
    }
  } catch {
    // Directory doesn't exist, proceed safely
  }

  // Prompt 2: Platform Selection
  const platform = await select({
    message: "Select target platform:",
    options: [
      {
        value: "vite",
        label: "Vite (React Web)",
        hint: "Fast, modern web frontend with React",
      },
      {
        value: "expo",
        label: "Expo (React Native)",
        hint: "Cross-platform iOS and Android mobile app",
      },
    ],
  });
  handleCancel(platform);

  // Prompt 3: Starter Archetype Selection
  const archetypeChoices =
    platform === "expo"
      ? [
          {
            value: "ecommerce_app",
            label: "Ecommerce App",
            hint: "Catalog, cart & mobile checkout",
          },
          {
            value: "finance_app",
            label: "Finance App",
            hint: "Digital wallet, cards & transactions",
          },
          {
            value: "productivity_app",
            label: "Productivity App",
            hint: "Task management, kanban & calendar",
          },
          {
            value: "delivery_app",
            label: "Delivery App",
            hint: "Courier dispatch & live order tracking",
          },
        ]
      : [
          {
            value: "ecommerce_web",
            label: "E-Commerce Web",
            hint: "Modern storefront, product grid & checkout",
          },
          {
            value: "finance_web",
            label: "Finance Web",
            hint: "Fintech analytics, charts & account management",
          },
          {
            value: "productivity_web",
            label: "Productivity Web",
            hint: "Collaboration boards & task management",
          },
          {
            value: "cms_web",
            label: "CMS & ERP Web",
            hint: "Content administration & editorial dashboard",
          },
        ];

  const archetype = await select({
    message: "Select starter domain archetype:",
    options: archetypeChoices,
  });
  handleCancel(archetype);

  // Construct source template subfolder path
  const templatePath = `${GITHUB_REPO}/${platform}/${archetype}`;

  log.step(
    picocolors.bold(
      `Creating ${picocolors.cyan(formattedProjectName)} with ${picocolors.magenta(
        platform
      )} / ${picocolors.blue(archetype)}...`
    )
  );

  const progress = new ProgressEngine();

  try {
    // Step 1: Fetching template repository...
    progress.startStep(1, 3, "Fetching template repository...");
    const emitter = degit(templatePath, { cache: false, force: true });

    emitter.on("info", (info) => {
      if (info.code === "FETCHING") {
        // Fetching event
      }
    });

    await emitter.clone(targetPath);
    progress.succeedStep("[1/3] Template repository fetched successfully.");

    // Step 2: Extracting starter codebase...
    progress.startStep(2, 3, "Extracting starter codebase...");
    progress.succeedStep("[2/3] Starter codebase extracted.");

    // Step 3: Initializing domain configurations...
    progress.startStep(3, 3, "Initializing domain configurations...");

    // Tailor package.json inside target directory if present
    const pkgPath = path.join(targetPath, "package.json");
    try {
      const pkgContent = await fs.readFile(pkgPath, "utf-8");
      const pkg = JSON.parse(pkgContent);
      pkg.name = formattedProjectName;
      await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf-8");
    } catch {
      // If template lacks a package.json or is structured differently, continue smoothly
    }

    progress.succeedStep("[3/3] Domain configurations initialized.");

    // Framed completion output
    const devCmd = platform === "expo" ? "pnpm start" : "pnpm dev";
    const nextSteps = [
      `${picocolors.dim("$")} ${picocolors.cyan(`cd ${formattedProjectName}`)}`,
      `${picocolors.dim("$")} ${picocolors.cyan("pnpm install")}`,
      `${picocolors.dim("$")} ${picocolors.cyan(devCmd)}`,
    ].join("\n");

    note(nextSteps, "Next steps");

    outro(
      picocolors.bold(
        picocolors.green("✨ Project created successfully! Happy coding!")
      )
    );
  } catch (error) {
    progress.failStep("Scaffolding failed.");
    console.log();
    log.error(
      picocolors.red(`Failed to scaffold template from ${picocolors.bold(templatePath)}`)
    );
    if (error.message) {
      log.message(picocolors.dim(`Details: ${error.message}`));
    }
    process.exit(1);
  }
}

function isEntrypoint() {
  if (!process.argv[1] || process.argv[1] === "[eval]") return false;
  try {
    const realArgv1 = fsSync.realpathSync(process.argv[1]);
    const realFile = fsSync.realpathSync(fileURLToPath(import.meta.url));
    return realArgv1 === realFile;
  } catch {
    return (
      process.argv[1].endsWith("index.js") ||
      process.argv[1].includes("create-ugaas-app") ||
      process.argv[1].includes("create-ugaas-proj")
    );
  }
}

if (isEntrypoint()) {
  main().catch((err) => {
    console.error(picocolors.red("Unexpected error:"), err);
    process.exit(1);
  });
}
