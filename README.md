##  Welcome to philanthropy , A full stack onchain donation website 


![Uploading Screenshot from 2024-07-09 00-00-07.png…]()


## Graph Query 

```

  const query = `
    {
      donations(first: 10, orderBy: id) {
      from
      id
      message
      name
      timestamp
      }
    }
  `;

```


The above query can be found in: https://github.com/steves-pixel/philanthropy/blob/main/Frontend/Component/v1.0.0/Review/Memos.jsx
