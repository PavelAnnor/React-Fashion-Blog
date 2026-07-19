
import './App.css'
import "./styles/util.css"
import Header from './components/Header'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';


const links1 = [
  {
    text: "Women's",
    href: "",
  },
  {
    text: "Men's",
    href: "",
  },
  {
    text: "On The Street",
    href: "",
  },
  {
    text: "The CatWalk",
    href: "",
  },
  {
    text: "Adwatch",
    href: "",
  },
  {
    text: "About",
    href: "",
  }
];

const links2 = [
  {
    text: "Home",
    href: "",
  },
 
  {
    text: "Women's",
    href: "",
  },
  {
    text: "Men's",
    href: "",
  },
  {
    text: "On The Street",
    href: "",
  },
  {
    text: "The CatWalk",
    href: "",
  },
  {
    text: "Adwatch",
    href: "",
  },
  {
    text: "About",
    href: "",
  },
  {
    text: "Tips",
    href: "",
  },
];




export default function App(){
 

  return (
    <>
      <Header title="Satre's List" subtitle="Better-Dressed People">
        <Navbar links={links1} textColor="tomato"></Navbar>
      </Header>

      <main>
        <BlogPost
          title="On The Street in Brooklyn"
          imgSrc="./img1.jpg"
          time={"02/11/22"}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea
            ullam, tenetur corporis accusamus ab odio ratione facere dicta, ad
            cum harum labore eius aliquam deserunt quas, eaque magni eum. Quam
            beatae fugiat nihil nemo iste molestiae libero, quaerat quasi
            tempora dolore provident commodi delectus. Consequuntur fugit, et
            itaque velit quis nisi accusamus asperiores beatae quia maxime
            similique, eveniet tenetur. Aperiam, porro eius? Quod quisquam
            explicabo quia nostrum dolore. Laboriosam, iure? Earum possimus
            consequatur doloremque obcaecati unde. Labore at, odio alias tenetur
            dolorem animi obcaecati aliquam iste quae modi temporibus. Dolor
            exercitationem voluptatibus veritatis, magnam cum minus unde maiores
            tempora eveniet aperiam, esse magni doloribus sint! Quisquam totam
            corrupti illo maiores quo in rem deserunt commodi voluptatem, nisi
            perferendis voluptatibus. Voluptates amet quia aliquam deleniti
            cupiditate esse quibusdam suscipit a, quae est, debitis consequatur
            repudiandae. Minus ullam necessitatibus cupiditate, corporis odio
            doloribus dignissimos quaerat, id iste fugiat dicta laboriosam sit?
          </p>
        </BlogPost>

        <BlogPost
          title="Vintage in Vogue"
          imgSrc="./img2.jpg"
          time={"07/01/27"}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea
            ullam, tenetur corporis accusamus ab odio ratione facere dicta, ad
            cum harum labore eius aliquam deserunt quas, eaque magni eum. Quam
            beatae fugiat nihil nemo iste molestiae libero, quaerat quasi
            tempora dolore provident commodi delectus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Rerum sunt obcaecati in
            repudiandae cupiditate deserunt beatae? Aliquam, reprehenderit minus
            similique quo qui numquam mollitia doloribus aperiam in, repellat
            error sed?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis soluta debitis sit facere! Numquam magnam eligendi
            blanditiis non atque laborum? Exercitationem porro, dicta aliquid
            incidunt beatae nemo fugit suscipit iste. Similique fugit voluptates
            vero dolorum beatae. Ex vero ratione labore assumenda? Dolore iusto,
            alias vero, nobis eius quisquam reprehenderit rem expedita nesciunt
            minus aperiam ipsam accusantium fugiat vitae blanditiis similique.
            Eum voluptatibus nostrum voluptates, expedita, asperiores modi,
            dicta delectus rerum fugiat explicabo nihil quis? Omnis nisi iusto
            officia neque dignissimos possimus sint, dolorem quidem accusamus
            corrupti ex recusandae. Vitae, itaque? Aperiam delectus id
            asperiores explicabo facere facilis necessitatibus illo itaque quod
            ea et totam debitis commodi temporibus laudantium distinctio, iste
            cum magni eum ut eveniet. Neque ea aperiam dolor ex? Incidunt
            tempore laborum saepe, ipsam quasi, et rem unde nostrum ipsa
            perferendis sunt tempora deserunt deleniti eveniet magni quos ut?
            Error voluptates cumque harum nobis placeat excepturi totam voluptas
            quae.{" "}
          </p>
        </BlogPost>
      </main>
      <Footer>
        <Navbar links={links2} textColor="grey"></Navbar>
      </Footer>
    </>
  );
}