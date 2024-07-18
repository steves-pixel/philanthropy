##  Welcome to philanthropy , A full stack onchain donation website 


![Screenshot from 2024-07-09 00-00-07](https://github.com/steves-pixel/philanthropy/assets/174949524/6a2985ad-2285-4a85-816e-4b68b9b78cda)


### COntract Address: 0xb94653d869ed7b388b59beb69905670d0a834b7d

https://sepolia.scrollscan.com/address/0xb94653d869ed7b388b59beb69905670d0a834b7d

![Screenshot from 2024-07-19 01-32-16](https://github.com/user-attachments/assets/65cd3a94-f504-49ae-aeea-001f6e453045)


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
