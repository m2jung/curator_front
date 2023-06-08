import LayoutSideNav from './side-nav.presenter'

export default function SideNavContainer() {

    const onClickScrollInfo = () => {
        window.scrollTo({
             top: 200,
             behavior: 'smooth',
        });
      }
        const onClickScrollPur = () => {
          window.scrollTo({
               top: 500,
               behavior: 'smooth',
          });
        }
    
      const onClickScrollMark = () => {
        window.scrollTo({
             top: 1000,
             behavior: 'smooth',
        });
      }
    
      const onClickScrollService = () => {
        window.scrollTo({
            top: 1300,
            behavior: 'smooth',
        });
      }


      // 반응 안함
    return (
        <> 
        <LayoutSideNav
            ScrollInfo={onClickScrollInfo}
            ScrollPur={onClickScrollPur}
            ScrollMark={onClickScrollMark}
            ScrollService={onClickScrollService}
        />
        </>
    )
}