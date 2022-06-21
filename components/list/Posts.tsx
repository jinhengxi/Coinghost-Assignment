import { fetcher } from '../../utils/fetcher';
import PostList from './PostList';
import useSWR from 'swr'
import { DataType } from './PostList'
import { useRouter } from 'next/router'





interface fetchDataType {
    data: {
        data: DataType;
        [x: string]: any;
    };
}


export default function Posts() {

    const router = useRouter();
    
console.log(router.query);
const query = Object.entries(router.query).map(el=>el.join('=').replace(/,/g,'&'+el[0]+'=')).join('&')
console.log(query)

const { data, error } = useSWR<fetchDataType>(`https://api.dev.coinghost.com/blogs${'?'+query}`, fetcher)
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
