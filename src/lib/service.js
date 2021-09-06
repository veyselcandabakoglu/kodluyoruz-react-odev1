import axios from "axios";

export default async function getData(number) {
    const { data: user } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + number);

    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/" + number);


    console.log(user);
    console.log(post);
}