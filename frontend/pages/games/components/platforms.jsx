import { PS, NS, Steam, Xbox, Epic, Google, Apple } from './logo';

const Platform = ({ storeSlug }) => {
  if (['playstation-store'].includes(storeSlug)) {
    return <PS />
  } else if (storeSlug === 'nintendo') {
    return <NS />
  } else if (storeSlug === 'steam') {
    return <Steam />
  } else if (storeSlug === 'xbox-store') {
    return <Xbox />
  } else if (storeSlug === 'epic-games') {
    return <Epic />
  // } else if (storeSlug === 'xbox360') {
  //   return <Xbox360 />
  } else if (storeSlug === 'google-play') {
    return <Google />
  } else if (storeSlug === 'apple-appstore') {
    return <Apple />
  } else {
    return null
  }
};

const PlatformWrapper = ({ storeSlug, className }) => {
  if (![
    'playstation-store', 'nintendo', 'xbox-store',
    'steam', 'epic-games', 'google-play', 'apple-appstore'
  ].includes(storeSlug)) {
    return null
  }
  return (<div className={className}>
    <Platform storeSlug={storeSlug} />
  </div>)
}

export default PlatformWrapper