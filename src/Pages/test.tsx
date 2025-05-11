import { axiosInstance } from '@/config/axios.config';
import { useQuery } from '@tanstack/react-query';

const Test = () => {
  interface IMember {
    _id: string;
    title: string;
    requirments: string;
    target_audience: string;
  }

  type ImemberResponse = IMember[];

  const getMembers = async (): Promise<IMember[]> => {
    const res = await axiosInstance.get<ImemberResponse>('/roadmaps');
    return res.data;
  };

  const { data, isLoading, error } = useQuery<IMember[], Error>({
    queryKey: ['Members'],
    queryFn: getMembers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading members</div>;

  return (
    <div>
      {data?.map((member) => (
        <div key={member._id}>
          <h2>{member.title}</h2>
          <p>{member.requirments}</p>
          <p>{member.target_audience}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
