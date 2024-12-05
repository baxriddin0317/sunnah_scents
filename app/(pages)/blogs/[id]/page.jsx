import Content from '@/components/blogs/Content';
import RelatedBlog from '@/components/blogs/RelatedBlog';
import { getAllBlogs, getBlogBySlug } from '@/lib/api';
import Image from 'next/image';
import markdownToHtml from '@/lib/markdownToHtml';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function Blog({params}){
  const { id } = await params;
  const allBlogs = getAllBlogs();
  const blog = getBlogBySlug(id);

  if (!blog) {
    return notFound();
  }

  const content = await markdownToHtml(blog.content || "");

  return (
    <main>
      {/* === hero start === */}
      <section className='pt-32 lg:pt-40'>
        <div className='max-w-[1516px] mx-auto px-4 pb-8 border-b border-[#D4D7CE] space-y-4 md:space-y-6 text-brand-balck'>
          <div>
            <h2 className='md:text-center text-32 md:text-40 lg:text-[56px] font-medium capitalize mb-4 text-brand-main'>
              {blog.title}
            </h2>
            <div className='flex items-center md:justify-center gap-3.5'>
              {/* img */}
              <div className='relative size-14 md:size-20 rounded-full overflow-hidden'>
                <Image className='absolute object-cover' src={blog.authorImg} alt={blog.title} fill />
              </div>
              {/* author */}
              <div>
                <h3 className='text-brand-main font-medium text-xl md:text-2xl caption-top'>{blog.author}</h3>
                <div className='flex items-center gap-3'>
                  <p className='text-sm md:text-base italic leading-6 text-brand-balck-100'>{blog.date}</p>
                  <span className='block size-2 rounded-full bg-brand-main'></span>
                  <p className='text-sm md:text-base italic leading-6 text-brand-balck-100'>{blog.readingTime}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative group w-full h-[516px] lg:h-[631px] overflow-hidden'>
            <Image className='object-cover group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 ease-linear' src={blog.image} fill alt={blog.title} />
          </div>
          <p className='text-sm lg:text-lg capitalize'>
          Lorem ipsum dolor sit amet consectetur. Id id luctus duis vel risus turpis elementum nunc. Quis quis viverra elit ultrices aliquet convallis vitae. Quis proin velit lobortis mattis amet pharetra elementum. Nec nunc auctor donec erat cras lorem proin venenatis lorem. Dignissim elementum habitant cursus ullamcorper placerat. Quis amet vitae vestibulum hac. <br />
          Elit ante ut accumsan metus arcu. Sapien diam a blandit sit. Pretium nulla turpis vel amet nibh ac. Laoreet magna fermentum cursus lorem lectus. Nam tortor enim sed nibh. Sem pellentesque ut sit mi scelerisque elit nunc augue curabitur. Eget turpis urna arcu libero nisl gravida massa nisi leo. Viverra a id quam dictum nibh dictum leo amet. Tempus sapien feugiat odio senectus congue ultricies. Elementum magna libero orci vehicula praesent eu pellentesque habitasse fermentum. Tempor urna diam ligula pretium. Aliquam maecenas lacus id lobortis rhoncus. Elementum vitae mattis erat dolor egestas montes. Iaculis semper nibh morbi consectetur egestas lacus. <br /> Ultrices enim eros ipsum tellus amet vel bibendum posuere. Adipiscing porttitor id sagittis lorem congue. Cras vulputate adipiscing eleifend dis tempus tincidunt ullamcorper et in. Vehicula mauris fames malesuada nisl. Imperdiet dui pharetra nulla tincidunt sed risus netus fames. Ullamcorper urna velit massa nec tempor diam porttitor convallis. Ut eget blandit orci velit aliquam in non. Posuere duis tristique dui elit laoreet. 
          </p>
          <p className='text-sm lg:text-lg capitalize'>
          Lorem ipsum dolor sit amet consectetur. Id id luctus duis vel risus turpis elementum nunc. Quis quis viverra elit ultrices aliquet convallis vitae. Quis proin velit lobortis mattis amet pharetra elementum. Nec nunc auctor donec erat cras lorem proin venenatis lorem. Dignissim elementum habitant cursus ullamcorper placerat. Quis amet vitae vestibulum hac. <br />
          Elit ante ut accumsan metus arcu. Sapien diam a blandit sit. Pretium nulla turpis vel amet nibh ac. Laoreet magna fermentum cursus lorem lectus. Nam tortor enim sed nibh. Sem pellentesque ut sit mi scelerisque elit nunc augue curabitur. Eget turpis urna arcu libero nisl gravida massa nisi leo. Viverra a id quam dictum nibh dictum leo amet. Tempus sapien feugiat odio senectus congue ultricies. Elementum magna libero orci vehicula praesent eu pellentesque habitasse fermentum. Tempor urna diam ligula pretium. Aliquam maecenas lacus id lobortis rhoncus. Elementum vitae mattis erat dolor egestas montes. Iaculis semper nibh morbi consectetur egestas lacus.
          </p>
          <div className='flex flex-col lg:flex-row items-center self-stretch gap-6'>
            <p className='flex-1 text-sm lg:text-lg capitalize'>
            Lorem ipsum dolor sit amet consectetur. Id id luctus duis vel risus turpis elementum nunc. Quis quis viverra elit ultrices aliquet convallis vitae. Quis proin velit lobortis mattis amet pharetra elementum. Nec nunc auctor donec erat cras lorem proin venenatis lorem. Dignissim elementum habitant cursus ullamcorper placerat. Quis amet vitae vestibulum hac. <br />Elit ante ut accumsan metus arcu. Sapien diam a blandit sit. Pretium nulla turpis vel amet nibh ac. Laoreet magna fermentum cursus lorem lectus. Nam tortor enim sed nibh. Sem pellentesque ut sit mi scelerisque elit nunc augue curabitur. Eget turpis urna arcu libero nisl gravida massa nisi leo. Viverra a id quam dictum nibh dictum leo amet. Tempus sapien feugiat odio senectus congue ultricies. Elementum magna libero orci vehicula praesent eu pellentesque habitasse fermentum. Tempor urna diam ligula pretium. Aliquam maecenas lacus id lobortis rhoncus. Elementum vitae mattis erat dolor egestas montes. Iaculis semper nibh morbi consectetur egestas lacus. <br />Ultrices enim eros ipsum tellus amet vel bibendum posuere. Adipiscing porttitor id sagittis lorem congue. Cras vulputate adipiscing eleifend dis tempus tincidunt ullamcorper et in. Vehicula mauris fames malesuada nisl. Imperdiet dui pharetra nulla tincidunt sed risus netus fames. Ullamcorper urna velit massa nec tempor diam porttitor convallis.
            </p>
            <div className='relative w-[399px] h-[346px]'>
              <Image className='object-cover' src={'/posts/blog-1.jpg'} fill alt='asdfas' />
            </div>
          </div>
          <p className='text-sm lg:text-lg capitalize'>
          Ultrices enim eros ipsum tellus amet vel bibendum posuere. Adipiscing porttitor id sagittis lorem congue. Cras vulputate adipiscing eleifend dis tempus tincidunt ullamcorper et in. Vehicula mauris fames malesuada nisl. Imperdiet dui pharetra nulla tincidunt sed risus netus fames. Ullamcorper urna velit massa nec tempor diam porttitor convallis. Ut eget blandit orci velit aliquam in non. Posuere duis tristique dui elit laoreet. Nisl amet nec semper ut. Lorem nulla nisi enim in in. <br /> Suspendisse tristique ac est sit dui in posuere. Sagittis diam erat nulla viverra volutpat ipsum. Nibh nam cras pulvinar mauris vel. Diam nunc mi cursus sed suspendisse. Massa quis eget viverra dolor massa. In ligula consectetur ac tellus semper bibendum. Morbi consectetur tristique luctus eget ut. Dolor aenean purus tellus iaculis aliquam. Enim ipsum vel pharetra proin urna aliquam lorem donec. <br />Lorem interdum sapien elementum massa in nunc. Morbi volutpat sem imperdiet vulputate. Facilisi in adipiscing adipiscing semper ut leo. Tincidunt fames magna sed nunc. Nunc ipsum ligula aliquam scelerisque bibendum senectus potenti pulvinar viverra. Purus et ac vitae elit blandit orci lectus nec. Et turpis commodo integer mollis. Eu varius tristique sed et suspendisse malesuada vitae molestie cursus. <br />Orci tempor at feugiat ut. Felis faucibus quis habitant montes. Mattis velit ultricies nunc sed nam praesent ultrices arcu. In faucibus ultrices consequat maecenas. Diam ultricies velit dignissim diam.
          </p>
          <div className='relative w-full h-[400px]'>
              <Image className='object-cover' src={'/posts/blog-2.jpg'} fill alt='asdfas' />
            </div>
          <p className='text-sm lg:text-lg capitalize'>
          Lorem ipsum dolor sit amet consectetur. Id id luctus duis vel risus turpis elementum nunc. Quis quis viverra elit ultrices aliquet convallis vitae. Quis proin velit lobortis mattis amet pharetra elementum. Nec nunc auctor donec erat cras lorem proin venenatis lorem. Dignissim elementum habitant cursus ullamcorper placerat. Quis amet vitae vestibulum hac. <br />Elit ante ut accumsan metus arcu. Sapien diam a blandit sit. Pretium nulla turpis vel amet nibh ac. Laoreet magna fermentum cursus lorem lectus. Nam tortor enim sed nibh. Sem pellentesque ut sit mi scelerisque elit nunc augue curabitur. Eget turpis urna arcu libero nisl gravida massa nisi leo. Viverra a id quam dictum nibh dictum leo amet. Tempus sapien feugiat odio senectus congue ultricies. Elementum magna libero orci vehicula praesent eu pellentesque habitasse fermentum. Tempor urna diam ligula pretium. Aliquam maecenas lacus id lobortis rhoncus. Elementum vitae mattis erat dolor egestas montes. Iaculis semper nibh morbi consectetur egestas lacus. <br />Ultrices enim eros ipsum tellus amet vel bibendum posuere. Adipiscing porttitor id sagittis lorem congue. Cras vulputate adipiscing eleifend dis tempus tincidunt ullamcorper et in. Vehicula mauris fames malesuada nisl. Imperdiet dui pharetra nulla tincidunt sed risus netus fames. Ullamcorper urna velit massa nec tempor diam porttitor convallis. Ut eget blandit orci velit aliquam in non. Posuere duis tristique dui elit laoreet. Nisl amet nec semper ut. Lorem nulla nisi enim in in. <br />Suspendisse tristique ac est sit dui in posuere. Sagittis diam erat nulla viverra volutpat ipsum. Nibh nam cras pulvinar mauris vel. Diam nunc mi cursus sed suspendisse. Massa quis eget viverra dolor massa. In ligula consectetur ac tellus semper bibendum. Morbi consectetur tristique luctus eget ut. Dolor aenean purus tellus iaculis aliquam. Enim ipsum vel pharetra proin urna aliquam lorem donec. <br />Lorem interdum sapien elementum massa in nunc. Morbi volutpat sem imperdiet vulputate. Facilisi in adipiscing adipiscing semper ut leo. Tincidunt fames magna sed nunc. Nunc ipsum ligula aliquam scelerisque bibendum senectus potenti pulvinar viverra. Purus et ac vitae elit blandit orci lectus nec. Et turpis commodo integer mollis. Eu varius tristique sed et suspendisse malesuada vitae molestie cursus. <br />Orci tempor at feugiat ut. Felis faucibus quis habitant montes. Mattis velit ultricies nunc sed nam praesent ultrices arcu. In faucibus ultrices consequat maecenas. Diam ultricies velit dignissim diam.
          </p>
          {/* <Content content={content} /> */}
        </div>
      </section>
      {/* === hero end === */}

      <RelatedBlog allBlogs={allBlogs} />
    </main>
  )
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = getBlogBySlug(id);

  if (!blog) {
    return notFound();
  }

  const title = `${blog.title} | Sunnah Scents' Blog`;

  return {
    title
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    id: blog.slug,
  }));
}
