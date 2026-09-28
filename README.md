# create-ugaas-app

> 🚀 Batteries-included CLI generator for scaffolding modern web and mobile starter applications.

`create-ugaas-app` generates ready-to-code fullstack projects with zero runtime dependency overhead. It packages production-ready architectural setups for both Web (React + Vite) and Mobile (React Native + Expo).

---

## ⚡ Quick Start

You can generate a new project instantly using any of your preferred package managers:

### With `npx`
```bash
npx create-ugaas-app [project-name]
```

### With `npm`
```bash
npm create ugaas-app [project-name]
```

### With `pnpm`
```bash
pnpm create ugaas-app [project-name]
```

If you don't pass a project name, the interactive CLI prompt will ask for one.

---

## 🧭 Interactive Workflow

1. **Project Name**: Enter a name for your application folder.
2. **Platform Selection**:
   - **Vite (React Web)**: Fast, modern web frontend with React.
   - **Expo (React Native)**: Cross-platform iOS and Android mobile app.
3. **Archetype Selection**: Select the template that fits your domain.
4. **Scaffolding**: The CLI fetches the template cleanly, tailors configurations, and sets up your project directory.

---

## 📦 Available Starter Templates

### 🌐 Web Starters (Vite + React)

| Starter Template | Archetype ID | Highlights & Description |
| :--- | :--- | :--- |
| **E-Commerce Web** | `ecommerce_web` | Modern storefront with product catalogs, shopping cart, and checkout flow. |
| **Finance Web** | `finance_web` | Fintech analytics dashboard, financial metrics charts, and account management. |
| **Productivity Web** | `productivity_web` | Collaboration boards, task management pipelines, and kanban views. |
| **CMS & ERP Web** | `cms_web` | Content administration portal, operational tables, and editorial management. |

### 📱 Mobile Starters (Expo + React Native)

| Starter Template | Archetype ID | Highlights & Description |
| :--- | :--- | :--- |
| **Ecommerce App** | `ecommerce_app` | Mobile shopping experience with product listings, cart, and mobile checkout. |
| **Finance App** | `finance_app` | Digital wallet, payment cards, balance monitoring, and transaction history. |
| **Productivity App** | `productivity_app` | Task management, kanban board, calendars, and reminder workflows. |
| **Delivery App** | `delivery_app` | Courier dispatch interface, order logistics, and live delivery tracking. |

---

## 🛠️ Post-Scaffolding Next Steps

Once the scaffolding completes, navigate to your new project and start the development server:

```bash
cd <project-name>
pnpm install
pnpm dev # (or `pnpm start` for Expo apps)
```

---

## 📄 License

MIT © [Maxamed Aweis](https://github.com/MaxamedAweis90)
