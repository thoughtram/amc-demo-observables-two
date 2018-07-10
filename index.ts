import {Observable} from 'rxjs'

let i = 0;
let observable = Observable.create(observer => {
  let id = setInterval(() => {
    console.log('notifying observer');
    observer.next(i);
    i++;
  }, 1000);
  
  return () => clearInterval(id);
});

let disposable = observable.subscribe(
  val   => console.log(val),
  error    => console.error(error),
  () => console.log('completed'));
  
setTimeout(() => {
  console.log('unsubscribing');
  disposable.unsubscribe();
}, 5000);