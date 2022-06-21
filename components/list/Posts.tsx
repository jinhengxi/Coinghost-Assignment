import { fetcher } from '../../utils/fetcher';
import PostList from './PostList';
import useSWR from 'swr'
import { DataType } from './PostList'



interface fetchDataType {
    data: {
        data: DataType;
        [x: string]: any;
    };
}


export default function Posts() {

const { data, error } = useSWR<fetchDataType>('https://api.dev.coinghost.com/blogs', fetcher)
if (error) return <div>failed to load</div>
if (!data) return <div>loading...</div>

return (
    <>
        {
        data.data.map((data: DataType) => {
            return(
            <PostList 
            key={data.id}
            data={data}
            />
        )})
        }
    </>
);
}
