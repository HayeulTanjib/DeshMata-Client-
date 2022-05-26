import { useQuery } from "react-query";

const useTools = () => {
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://dry-escarpment-82110.herokuapp.com/tools', { method: 'GET' }).then(res => res.json()))
    return [tools, isLoading, refetch];
}

export default useTools;