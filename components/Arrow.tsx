export function Arrow({ reverse = false }: { reverse?: boolean }) {
  return <span aria-hidden="true">{reverse ? "←" : "→"}</span>;
}
