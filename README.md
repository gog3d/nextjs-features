Этот проект [Next.js](https://nextjs.org/) был установлен утилитой [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Приложение можно посмотреть по ссылке https://perfavore.vercel.app/

## Несколько требований к проекту

-   Названия **_файлов и директорий_** написаны в нижнем регистре и не имеют пробелов, для разделений используется дефис, например: директория <code>my-dir</code>, файл <code>my-component.tsx</code>
-   Стили портированы как модули. Если есть общие стили, они портированы в глобальную область видимости
-   Названия функциональных **_компонентов_** написаны с **_Большой буквы_**
-   Разметка портирована в JSX, заключена в <code>( )</code> и вынесена в соответствующие ей компоненты
-   Хуки не используются внутри условных блоков и вызываются в основной функции компонента
-   Один файл содержит в себе один функциональный компонент
-   Файлы с утилитарными функциями имеют расширение <code>.ts</code>
-   Файлы с компонентами имеют расширение <code>.tsx</code>
-   Имена переменных — существительные, имена функций отражают то что они делают
-   Для именования запрещены транслит и неуместные сокращения
-   Код оформлен по принципам программирования DRY:droplet: и KISS:kiss:

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
