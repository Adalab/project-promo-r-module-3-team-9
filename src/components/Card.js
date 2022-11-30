import Header from './Header';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Footer from './Footer';

function Card() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <CardPreview></CardPreview>
        <section className='main__form'>
          <form className='js-form' action='' method='POST'>
            <Design user={props.user} handleChange={handleChange}></Design>
            <Fill></Fill>
            <Share></Share>
          </form>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Card;
