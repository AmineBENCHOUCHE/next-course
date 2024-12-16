const page = async () => {
	const users = await fetch("https://jsonplaceholder.typicode.com/users");
	const usersData = await users.json();
	const names = await new Promise((resolve, reject) => {
		setTimeout(() => {
			// resolve(usersData.map((user) => user.name));
            reject("error");
		}, 2000);
	});
	return <div>
        <ul>
            {names.map((name, index) => <li key={index} className=" p-2 space-y-2 w-[1/2] shadow-md rounded-lg border-b last:border-none">{name}</li>)}
          
        </ul>
    </div>;
};
export default page;
