import React, { useState } from "react";
import logo from "./assets/images/boxpro.webp";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import queryClientPersisted from "./utils/persistQuryClient";

interface PortfolioProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
}

interface PostData {
  email: string;
  id: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

function Testing() {
  const [mapData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [services] = useState([
    { title: "Web Designing", icon: "fas fa-laptop" },
    { title: "Mobile Designing", icon: "fas fa-mobile-screen-button" },
    { title: "Consultancy Support", icon: "fas fa-headset" },
    { title: "Network Security", icon: "fas fa-shield-halved" },
  ]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  };

  const { data, isError, isLoading } = useQuery<PortfolioProps[]>({
    queryKey: ["data"],
    queryFn: getData,
  });

  console.log("Data:::::", data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newData: PostData) => {
      return axios.post("https://jsonplaceholder.typicode.com/users", newData);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["jazzz"], data);
      queryClientPersisted.setQueryData(["jazzz111"], data);
      console.log("Data has been posted successfully", data);
    },
    onError(error, variables, context) {
      console.log("Error while posting data", error, variables, context);
    },
  });

  const handlePostData = () => {
    const body = {
      email: "jazz@gmail.com",
      id: "1",
      name: "JJJJJjj",
      phone: "66666666666",
      username: "jjjjjjjjj",
      website: "jjjjjjjjj.com",
    };
    mutation.mutate(body);
  };

  return (
    <>
      <button onClick={() => handlePostData()}>Post Data</button>
      <div>
        <h1>Our services</h1>
      </div>
      <div className="grid grid-cols-5">
        {services.map((item: { icon: string; title: string }, index) => (
          <div
            key={index.toString()}
            className="flex flex-col items-center shadow-lg text-center p-5 m-5 rounded-md"
          >
            <i className={`fas ${item.icon} text-7xl`}></i>
            <div className="text-3xl py-5 font-semibold">{item.title}</div>
            <p className="font-sans">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              saepe sequi hic quam amet, vero quis quaerat laborum maiores
              delectus doloremque quidem ipsum quae consequuntur aspernatur enim
              possimus voluptatibus corrupti!
            </p>
          </div>
        ))}
      </div>
      <div>
        <div className="items-center">
          <h2 className="font-sans text-2xl py-5 text-red-600">
            Card designing
          </h2>
        </div>
        <div className="grid grid-cols-8 items-center gap-4">
          {mapData.map((item) => (
            <div
              key={item.toString()}
              className="shadow-md overflow-hidden flex flex-col bg-white items-center pb-5 m-5 rounded-md text-center"
            >
              <img
                className="rounded-md hover:scale-125 duration-1000"
                src={logo}
                alt=""
              />
              <div className="pt-10 ">Product title</div>
              <p>Rs. {Math.floor(Math.random() * 5000)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col auto-cols-max gap-4">
        <div className="row-span-3  bg-cyan-400">RJ</div>
        <div className="bg-cyan-400 max-w-[1/2]">
          Hi there hkf f f hf f y yu v yug yuvy yy f f f f hjHi there hkf f f hf
          f y yu v yug yuvy yy f f f f
        </div>
        <div className="row-span-2 bg-cyan-400">
          hello there how are you doing?
        </div>
      </div>

      <div className="grid grid-flow-col grid-rows-3 gap-4 min-h-96">
        <div className="bg-blue-400 flex items-center justify-center rounded row-span-2">
          1
        </div>
        <div className="bg-blue-400 flex items-center justify-center rounded row-start-2 row-span-2">
          2
        </div>
        <div className="bg-blue-400 flex items-center justify-center rounded row-span-3 ">
          3
        </div>
      </div>
      <div className="text-4xl my-10">Grid row-span</div>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-6 m-5">
        <div className="py-5 text-center h-60 max-h-96 text-yellow-300 font-semibold text-9xl bg-black rounded-full row-span-3 mr-5 items-center justify-center flex">
          <div>JR</div>
        </div>
        <div className="bg-slate-400 flex justify-center items-center text-center rounded mb-1 col-span-5 ">
          2
        </div>
        <div className="bg-slate-400 flex justify-center items-center text-center rounded mt-1 col-span-5">
          3
        </div>
      </div>

      <div className="text-4xl my-10">Grid order row</div>
      <div className="grid 2xl:grid-rows-5 xl:grid-rows-6 lg:grid-rows-8 md:grid-rows-10 sm: grid-rows-12 grid-flow-col gap-4">
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full ">
          1
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center row-span-2 rounded-tl-full rounded-br-full">
          2
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          3
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          4
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          5
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          6
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          7
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          8
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          9
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          10
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          11
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          12
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          13
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          14
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          15
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          16
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          17
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          18
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          19
        </div>
        <div className=" bg-cyan-500 py-5 px-5 text-center rounded-tl-full rounded-br-full">
          20
        </div>
      </div>

      <div className="text-4xl my-10">Grid order Column</div>
      <div className="grid  2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-10 mx-5 p-5">
        <div className="bg-green-300 rounded-md text-center py-5 col-start-3 col-end-5">
          Hi there 1
        </div>
        <div className="bg-green-300 rounded-md text-center py-5 col-start-5 col-end-7">
          Hi there 2
        </div>
        <div className="bg-green-300 rounded-md text-center py-5 col-span-5">
          Hi there
        </div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
        <div className="bg-green-300 rounded-md text-center py-5 col-span-3">
          Hi there
        </div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
        <div className="bg-green-300 rounded-md text-center py-5 col-span-2">
          Hi there
        </div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
        <div className="bg-green-300 rounded-md text-center py-5 col-span-2">
          Hi there
        </div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
        <div className="bg-green-300 rounded-md text-center py-5">Hi there</div>
      </div>
    </>
  );
}

export default React.memo(Testing);
