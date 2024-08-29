import React from 'react';

async function getPostsData() {
  const response = await fetch('http://203.150.243.197:4000/landingPage/getArticleList');

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options); 
}


export default async function Page() {
  try {
    const result = await getPostsData();

    return (
      <>
        {result.response.result.map((post, index) => (
          <div key={index}>
            
            {formatDate(post.createTime)}
           
          </div>
        ))}
        <h1>ทดสอบ APi </h1>
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return <div>Error fetching data</div>;
  }
}
