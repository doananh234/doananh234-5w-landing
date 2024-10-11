import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node'; // or cloudflare/deno
import './tailwind.css';
import './globals.css';
import Container from './components/Container';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  // ...
];
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Container>{children}</Container>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
