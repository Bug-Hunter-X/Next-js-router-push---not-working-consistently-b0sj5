```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Solution: Using asPath to ensure correct navigation
    router.push('/my-page', undefined, { shallow: true }); 
  };

  return (
    <button onClick={handleClick}>Go to My Page</button>
  );
}

export default MyComponent; 
```