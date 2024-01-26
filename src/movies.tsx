import axios, { AxiosResponse } from 'axios';

interface Movie {
  id: number;
  title: string;
  year : number, 
  Plot : boolean, 
}


const getMovies = async (): Promise<Movie[]> => {
  try {
    const response: AxiosResponse<Movie[]> = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=1215c038');
    

    const movies: Movie[] = response.data;

    console.log('movies:', movies);

    return movies;
  } catch (error : any) {
    console.error('Error fetching movies:', error.message);
    throw error;
  }
};

getMovies();