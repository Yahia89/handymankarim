export default function imageLoader({
  src,
}: {
  src: string
}) {
  const prefix = process.env.BASE_PATH || '';
  return `${prefix}${src}`;
}