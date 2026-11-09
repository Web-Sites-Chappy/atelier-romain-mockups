import { Fragment, type ReactNode } from "react";

/**
 * Convierte un texto de content/*.json en JSX.
 * Convención para quien edita: `\n` es un salto de línea y `*texto*` resalta el fragmento.
 *
 * `emphasis` elige la etiqueta del resaltado. Por defecto `em` (oliva). El hero de la
 * portada usa `span` porque sobre fondo oliva el `em` quedaría del mismo color que el fondo.
 */
export function RichText({ children, emphasis = "em" }: { children: string; emphasis?: "em" | "span" }): ReactNode {
  const Emphasis = emphasis;
  return children.split("\n").map((line, lineIndex) => (
    <Fragment key={`${line}-${lineIndex}`}>
      {lineIndex > 0 && <br />}
      {line.split(/(\*[^*]+\*)/).filter(Boolean).map((part, partIndex) =>
        part.startsWith("*") && part.endsWith("*")
          ? <Emphasis key={`${part}-${partIndex}`}>{part.slice(1, -1)}</Emphasis>
          : <Fragment key={`${part}-${partIndex}`}>{part}</Fragment>
      )}
    </Fragment>
  ));
}
