import axios from 'axios';
import sleep from './delay';

async function fetcher<T>(url: string): Promise<T | string> {
  const errorMessage = {
    base: 'Ha ocurrido un error:',
    fetchFailed: 'Error al obtener la data',
    unknown: 'Error desconocido vuelva a intentarlo mas tarde',
  };

  try {
    const response = await axios.get<T>(url);

    if (response.status !== 200 || response.statusText !== 'OK') {
      throw new Error(errorMessage.fetchFailed);
    }

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return `${errorMessage.base} ${error.message}`;
    }

    return errorMessage.unknown;
  }
}

export default fetcher;
