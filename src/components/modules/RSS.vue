<template>
	<b-card class="demo-shortcut rss-widget">
		<h4 slot="header">
			<font-awesome-icon icon="rss" /><a
				class="mx-3">RSS</a><em>Feed</em>
		</h4>

        <b-row>
            <b-col>
                <h1>{{feed.title}}</h1>
                <p>{{feed.description}}</p>
                <a :href="feed.link">{{feed.generator}}</a>
            </b-col>
            <b-col>
                <ul class="rss-items">
                    <li v-for="item in feed.items"
                        :key="item.link"><a
                        :href="item.link" target="_blank">{{item.title}}</a></li>
                </ul>
            </b-col>
        </b-row>
	</b-card>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import RSSParser from 'rss-parser';

const proxy = 'https://cors-anywhere.herokuapp.com/';

export default {
	components: {
		FontAwesomeIcon,
	},
    data() {
        return {
            url: 'http://rss.news.sohu.com/rss/focus.xml',
            feed: {
                items: []
            }
        }
    },
    mounted() {
        const parser = this.parser = new RSSParser();

        parser.parseURL(proxy + this.url, (err, feed) => {
            feed.items.splice(10);

            this.feed = feed;
        });
    }
}
</script>

<style lang="less">

.rss-widget {

    p {
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ul.rss-items {
        padding: 0;

        li {
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>
