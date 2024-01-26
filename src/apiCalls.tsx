import axios, { AxiosResponse } from 'axios';

interface Movie {
  id: number;
  title: string;
  year : number, 
  Plot : boolean, 
}

export const  getMovies = async (): Promise<Movie[]> => {
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

export const getDetailMovie = async (id: number): Promise<Movie | null> => {
    try {
      const response: AxiosResponse<Movie> = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=1215c038${id}`);
      const detailMovie: Movie = response.data;
      return detailMovie;
    } catch (error : any) {
      console.error(`Error fetching details for movie with ID ${id}:`, error.message);
      return null;
    }
  };