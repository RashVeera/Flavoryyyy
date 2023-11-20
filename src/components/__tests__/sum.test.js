
import { sum } from "../sum";

test('adds 1 + 2 to equal 3', () => {
    const result=sum(1, 2);
    
    expect(result).toBe(3);
    
  });

  test('adds 1 + 4 to equal 5', () => {
 
    const result2=sum(1, 4);
    expect(result2).toBe(5);
  });
  
  