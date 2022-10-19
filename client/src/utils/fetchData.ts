export const fetchData = async (path: string) => {
    const response = await fetch(`http://localhost:1337/${path}`).then(response => response.json())
      .catch((err) => console.log(err));
    
    return response
  };