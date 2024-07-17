// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
  ];
  
  function createPost(post, callback) {
    setTimeout(() => {
      posts.push(post);
      callback();
    }, 1000);
  }
  
  function getPosts() {
    // console.log(posts);
    setTimeout(() => {
      posts.forEach(function (post) {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
        document.querySelector('#posts').appendChild(div);
      });
    }, 2000);
  }
  
  createPost({ title: 'Post Three', body: 'This is post' }, getPosts);
  // getPosts();
  