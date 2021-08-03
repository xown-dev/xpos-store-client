import styled from "styled-components";
import { Layout, Input, List, Card, Badge } from 'antd';
const { Sider } = Layout;

// Page content layout
export const PageContentLayout = styled(Layout)`
    height: inherit;
    flex-direction: column !important;
    background: transparent !important;
`;

// Page header layout
export const PageHeaderLayout = styled(Layout)`
    height: auto;
    width: auto !important;
    margin-right: 216px;
    margin-bottom: 8px;
    background: transparent !important;
`;

// Product content section layout
export const ProductContentLayout = styled(Layout)`
    height: inherit;
    background: transparent !important;
`;

// Product categories sider
export const ProductCategoriesSideMenu = styled(Sider)`
    height: inherit;
    position: fixed;
    right: 0;
    /* margin-top: 50px; */
    margin-left: 16px;
    margin-right: 24px;
    background: transparent;
`;

// The product collection ccontainer wrapper
export const ProductCollectionWrapper = styled.div`
    height: auto;
    margin-right: 216px;
`;

// Product search box
export const ProductSearchBox = styled(Input)`
    padding: 16px;
    background: transparent;
`;

// Products page list component
export const ProductList = styled(List)`

`;

// Product list item component
export const ProductListItem = styled(List.Item)`
    box-shadow: 0 0 0.5rem rgb(0 0 0 / 5%);
    /* box-shadow: 0 0 0.5rem rgb(231 122 26 / 5%); */
`;

// Product card custom element
export const ProductCard = styled(Card)`
    border: none;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;

    /* On hover... */
    &:hover
    {
        /* Set box shadow */
        box-shadow: 0 0.25rem 0.5rem 0 rgb(0 0 0 / 12%), 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%);
    }
`;

// Product item badge component
export const ItemBadgeRibbon = styled(Badge.Ribbon)`
    font-family: 'Segoe UI', sans-serif;
`;
