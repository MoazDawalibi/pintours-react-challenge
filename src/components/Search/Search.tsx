import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useFieldFilterState } from '@/zustand/FieldFilterState';
import { useDebounce } from '@/hooks/useDebounce';

const Search = () => {
  
  const setFilteredData = useFieldFilterState((state)=>state.setFilteredData)
  const handleSearch = useDebounce((value:string) => {
    setFilteredData({name:value})
  });

  return (
    <>
        <Input
        placeholder="Search..."
        prefix={<SearchOutlined />}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: '400px' }}
      />  
    </>
  )
}

export default Search