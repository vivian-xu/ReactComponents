import React from 'react';

class Pagination extends React.Component {
    //  limit 每一页的个数
    // pagesCtr 所有页码 1，2，3...组成的数组
    // pageId 现在所在的页码
    constructor(props) {
        super(props);
        this.displayName = 'Pagination';
        this.state = {
             items: [
               'I am one',
               'I am two',
               'I am three',
               'I am four',
               'I am five',
               'I am six',
               'I am seven',
               'I am eight',
               'I am nine',
               'I am ten'
             ],
             limit: 3,
             pagesCtr: [],
             pageId: 0,
           }
    }

    componentWillMount() {
        console.log('Pagination component will mount~~' );

        let len = this.state.items.length;
        let totalPageLen = [];

        for( var i = 0; i < Math.ceil( len/this.state.limit ) ; i++) {
            totalPageLen.push(i)
        }

        this.setState({
            pagesCtr: totalPageLen
        });
    }

    onHandlePageChange( id ) {
        console.log( id );
        this.setState({
            pageId: id
        });
    }

    render() {
        console.log('Pagination render start');

        let limit = this.state.limit;
        let pageId = this.state.pageId;

        let pagesControll = this.state.pagesCtr.map(function( ctr, index) {

            return (
                <li key={index} className ={pageId==index? 'active':' '} >
                    <a href='javascript:void(0);'  onClick={this.onHandlePageChange.bind(this, ctr)} > {ctr+1} </a>

                </li>
            );
        }.bind(this));

        let startItem = limit*pageId;
        let pageItems = this.state.items.slice( startItem, startItem+limit ).map(function( item, index ){
            return(
                <li key={index}>
                    {item}
                </li>
            );
        });

        return(
            <div id="pagination-wrap">
            Pagination
                <ul id="itemList">
                {pageItems}
                </ul>
                <ul id="pagesControll">
                {pagesControll}
                </ul>
            </div>);
    }
}

export default Pagination;
