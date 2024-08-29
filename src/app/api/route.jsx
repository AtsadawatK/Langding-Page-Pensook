async function getPostsData() {
    const response = await fetch('http://203.150.243.197:4000/landingPage/getArticleList');
  
    if (!response.ok) {
      throw new Error('Error');
    }
  
    return response.json();
  }

  const result =  getPostsData();
  console.log('result ', result.response);