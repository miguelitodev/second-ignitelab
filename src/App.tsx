import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
	query {
		lessons {
			id
			title
		}
	}
`;

interface Lessons {
	id: string;
	title: string;
}

function App() {
	const { data } = useQuery<{ lessons: Lessons[] }>(GET_LESSONS_QUERY);
	console.log(data);

	return <h1 className="text-2xl">Hello</h1>;
}

export default App;
