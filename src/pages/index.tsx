import React from "react";
import { useRouter } from "next/navigation";
import { useGetAllImages } from '@/api/end-point/items';
import { useModalState } from '@/zustand/Model';
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useFieldFilterState } from "@/zustand/FieldFilterState";
import SingleCard from "./modal";
import SpinContainer from "@/components/UI/SpinContainer";

const index = () => {
  const FilteredData = useFieldFilterState((state)=>state.FilteredData)
  const setIsOpen = useModalState(state=>state.setIsOpen)
  const router = useRouter();

  const handleClick = (record:any) =>{
    router.push(`?photo_id=${record?.id}`); // Set query parameters directly
      setIsOpen(true)
  }

  const name = FilteredData?.name ||  "olive trees"
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetAllImages({text:name});

  useInfiniteScroll(fetchNextPage, hasNextPage);

  if (isLoading) return <div className="loading_home"><SpinContainer/></div>;

  return (
    <div className="home-page">
      <div className="image-cards">
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.photos.photo.map((photo) =>{              
              return  (
                <div className="image-card" onClick={()=>handleClick(photo)} key={photo.id}>
                  <img src={photo.url_w} alt={photo.title} />
                  <p>{photo.title}</p>
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>

      <div>
        {isFetchingNextPage && <SpinContainer size="large" />}
      </div>

      <SingleCard/>
    </div>
  );
};

export default index;