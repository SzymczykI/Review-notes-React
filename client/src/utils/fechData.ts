

export const fetchData = async () => {
    const response = await fetch("http://localhost:1337/all").then(response => response.json())
      .catch((err) => console.log(err));
    
    return response
  };