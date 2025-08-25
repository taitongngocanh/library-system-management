import { Carousel } from "./components/Carousel";
import { ExploreTopBook } from "./components/ExploreTopBook";
import { Heros } from "./components/Heros";
import { LibraryService } from "./components/LibraryServices";

export const HomePage = () => {
     return (
          <>
               <ExploreTopBook />
               <Carousel />
               <Heros />
               <LibraryService />
          </>
     );
}