import Header from './Header';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';


function Card(props) {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <CardPreview></CardPreview>
        <section className='main__form'>
          <form className='js-form' action='' method='POST'>
            <Design user={props.user} handleChange={props.handleChange}
            handleClickDesign={props.handleClickDesign} classArrowDesign={props.classArrowDesign}></Design>
            <Fill></Fill>
            <Share></Share>
          </form>
        </section>
      </main>
    </>
  );
}
export default Card;
