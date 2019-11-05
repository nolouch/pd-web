# pd-web (WIP)

PD Web by PingCAP FE.

## The Rules

**Please ensure that each commit is followed the setting of:**

- `.editorconfig`
- `.prettierrc`

### Sass rules

Each `.scss` file is associated with a component, like `Container.scss`.

All components' top class name should keep with `PD-`, for example, `PD-Container` is the top class name of `Container` component.

### Component rules

All main components in the `components` dir should use the form of `index.tsx`, for example:

```sh
Container/
  index.tsx
  Routes.tsx
  Tabs.tsx
Nav/
  index.tsx
```

### Test rules

All test files should be placed in `src/__tests__` dir.

## How to develop

```sh
git clone https://github.com/pingcap-fe/pd-web.git && cd pd-web

# We recommend using yarn
yarn
yarn start
```

## Run tests

Make sure the necessary unit tests passed.

```sh
yarn test
```

## License

MIT @ PingCAP-FE
