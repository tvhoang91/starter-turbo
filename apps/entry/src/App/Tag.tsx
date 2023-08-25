import tw, { styled } from 'twin.macro';

const Tag = styled.div({
  ...tw`inline-block px-3 py-1 rounded-full text-xs font-bold text-center whitespace-nowrap`,
  '.yay-icon': tw`inline-block w-3 h-3 mr-1`,
});

export default Tag;
