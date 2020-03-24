/**
 * Extracts the type of a component's props type
 * Usage example: type PropsType = ExtractPropsType<typeof SomeComponent>;
 */
export type ExtractPropsType<T> = T extends React.ComponentType<infer P>
  ? P
  : T extends React.Component<infer P>
    ? P
    : T extends React.FunctionComponent<infer P>
      ? P
      : never;
