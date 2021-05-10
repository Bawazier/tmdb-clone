import React from "react";

export async function getStaticProps() {

  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { language: "en-US" } },
    ],
    fallback: false,
  };
}


function index() {
  return (
    <div>
      
    </div>
  );
}

export default index;