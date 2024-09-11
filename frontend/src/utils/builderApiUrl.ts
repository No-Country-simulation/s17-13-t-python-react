function builderApiUrl(params: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BIBLIOZ_API;

  console.log(baseUrl);

  if (!baseUrl) {
    throw new Error('La URL base para la API no está definida en las variables de entorno.');
  }

  return `${baseUrl}/${params}`;
}

export default builderApiUrl;
