export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  readingTime: number;
};

export async function getAllPosts(): Promise<Post[]> {
  // This is a placeholder. In a real application, you would fetch this from your 
  // CMS or database
  return [
    {
      slug: "dicas-para-estudar",
      title: "5 Dicas Essenciais para Estudar para Concursos",
      date: "2024-03-20",
      coverImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40pTLyZboOryXJkZTnnsFh4k2aAf479C6rmFx2C3uHlIkDcQEvf1DQL81uoYdKK2PelY&usqp=CAU",
      excerpt: "Aprenda as melhores técnicas para otimizar seus estudos...",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis justo ac elit ullamcorper pellentesque. Nulla ultricies orci vitae odio dictum, nec sagittis mauris lobortis. Fusce lacinia pharetra magna, sed fermentum erat vehicula eget. Sed nisi dolor, commodo eu rhoncus efficitur, venenatis a quam. Etiam sed nisl ornare, iaculis ante vestibulum, varius ligula. Fusce eleifend fringilla enim, quis bibendum orci elementum non. Cras imperdiet dignissim enim. Fusce feugiat ac augue fermentum tincidunt. Proin in dapibus ipsum, et placerat urna. Nam quis dolor vel ex fringilla feugiat vehicula non lorem. Vivamus fringilla porta sodales. Fusce turpis lorem, tincidunt ac massa id, tempor laoreet urna. Donec arcu nulla, molestie eget metus eu, pharetra bibendum arcu.

Etiam magna risus, luctus a nunc at, aliquet varius purus. Duis condimentum fermentum varius. Cras nec sapien orci. Quisque vitae molestie neque, eu tristique augue. Morbi a leo in dui semper condimentum. Sed suscipit condimentum lectus, a bibendum quam semper sit amet. Aliquam fringilla mi rutrum mauris maximus vulputate. Duis nec pellentesque enim.

Vivamus at pretium mi. Donec fringilla dui vitae est fringilla, aliquet semper leo pretium. Vivamus rhoncus quis sapien commodo placerat. Duis accumsan imperdiet mi sed vestibulum. Nullam sit amet tristique felis. Integer tortor nibh, egestas in mattis non, commodo sit amet elit. Vivamus lacinia, massa vitae tempor consequat, diam ex facilisis mi, et dignissim eros nulla sed tellus. Fusce consectetur augue metus, id rutrum libero pharetra quis. Cras a tristique massa, sed tempor sem. Sed congue fermentum nulla eget porta.

Etiam sit amet mattis ligula. Nullam non eros malesuada, porta orci scelerisque, pellentesque diam. Aenean suscipit, ex vel sagittis posuere, purus dolor finibus neque, vel iaculis ligula dui ac felis. Nunc mauris turpis, fermentum eu velit id, vestibulum pharetra ex. Praesent scelerisque odio at tellus fringilla molestie nec sit amet lectus. Etiam non porttitor tortor, sed laoreet tellus. Nulla leo nisi, faucibus at posuere eu, posuere sed dolor. Nam porta purus lectus, eget maximus massa sagittis nec. Integer ornare lorem leo, nec congue dolor fermentum ac. Donec porttitor, urna quis pharetra ullamcorper, nibh sapien vestibulum ligula, vitae egestas risus mauris ac orci. Integer quis enim ac nulla posuere vestibulum ac at nisi. Quisque quam mauris, ultrices aliquet volutpat sed, pharetra vitae dolor.

Duis sed congue lacus. Cras vitae gravida sem. Suspendisse feugiat quam vel rutrum varius. Nunc metus risus, venenatis ac auctor et, pretium id diam. Maecenas placerat sapien eu tristique fermentum. In tempor semper mauris, sed dapibus libero suscipit sed. Donec quam ipsum, rutrum aliquam eleifend scelerisque, tempor vel nibh.`,
      readingTime: 5,
    },
    // Add more posts here
  ];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
} 