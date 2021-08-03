import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import { Layout, List, Card } from 'antd';
import { FaCartPlus } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { ItemBadgeRibbon, PageContentLayout, PageHeaderLayout, ProductCard, ProductCategoriesSideMenu, ProductCollectionWrapper, ProductList, ProductListItem, ProductSearchBox } from './ProductsPageElements';
import { SearchOutlined, BarcodeOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export default class Products extends Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            product: {
                title: 'Default',
                description: ''
            }
        };

        this.category = [
            {
                name: "Computers"
            },
            {
                name: "Solar Energy"
            },
            {
                name: "Laptops"
            },
            {
                name: "Desktops"
            },
            {
                name: "Printers"
            },
            {
                name: "Batteries"
            },
            {
                name: "Computer Accessories"
            },
            {
                name: "Servers"
            },
            {
                name: "Softwares"
            },
            {
                name: "Cyber Security Solutions"
            }
        ];

        this.data = [
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            },
            {
                title: 'Dell Vostro 3500, 11th Gen, Intel',
                description: 'Dell Vostro 3500, 11th Gen, Intel Core i3, 4GB RAM 1TB HDD 15.6'
            }
        ];

        // Bind the properties of showDrawer
        this.showDrawer = this.showDrawer.bind(this);

        // Bind the properties of onClose
        this.onClose = this.onClose.bind(this);
    }

    // Triggers when show drawer is invoked
    showDrawer(productItem) {

        // Set the single product item
        this.setState({
            product: productItem
        });

        // Show the drawer
        this.setDrawerVisibility(true);
    }

    // Triggers when close drawer is invoked
    onClose() {
        // Close the drawer
        this.setDrawerVisibility(false);
    }

    // Set the drawer's visibility based 
    // on the passed parameter
    setDrawerVisibility(flag) {
        this.setState({
            visible: flag
        });
    }

    // Renders the view content for this page
    render() {

        return (
            <>
                <PageContentLayout>

                    <PageHeaderLayout>
                        <ProductSearchBox placeholder="Filter Products" bordered={false} allowClear size="large" prefix={ <SearchOutlined style={{ fontSize: '20px' }} /> } suffix={ <BarcodeOutlined style={{ fontSize: '28px' }} /> } className='product-search-box-wrapper' id='psb' />
                    </PageHeaderLayout>

                    <ProductCollectionWrapper>
                        <ProductList
                            grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 4, }}
                            dataSource={this.data}
                            renderItem={item => (
                                <ProductListItem onClick={ () => this.showDrawer(item) }>
                                    {/* <ItemBadgeRibbon text='30% Off' color='#ff3b3b'> */}
                                        <ProductCard 
                                            cover={<img alt="example" src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1627222701/contentservice/computing.png_B1BhMloRu.png" />}
                                            actions={[
                                                // <h3 style={{ textAlign: 'left' }}><strong>Add to Cart</strong></h3>
                                                <MdAddShoppingCart style={{ fontSize: '28px' }} />
                                              ]}
                                        >
                                            <Card.Meta title={item.title} description={ item.description } />
                                        </ProductCard>
                                    {/* </ItemBadgeRibbon> */}
                                </ProductListItem>
                            )}
                        />
                    </ProductCollectionWrapper>

                    <ProductCategoriesSideMenu>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.category}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.name}
                                    />
                                </List.Item>
                            )}
                        />
                    </ProductCategoriesSideMenu>
                </PageContentLayout>

                <Drawer
                    title={this.state.product.title}
                    placement="right"
                    width='calc(100vw - 100px)'
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>{this.state.product.description}</p>
                    {/* <p>Some contents...</p>
                    <p>Some contents...</p> */}
                </Drawer>
            </>
        );
    }
}
