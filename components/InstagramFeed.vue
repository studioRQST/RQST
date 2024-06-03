<script setup>
import {ref, onMounted, computed} from 'vue';
import axios from 'axios';

const ACCESS_TOKEN = 'IGQWRNcmU4NURYc2NiNmdlcVBSMDBYMjhnYXVhRXdDME5nMFRjRDRIZAWk3S00yNUFxMzV4eUJRWWF1NGJuelRSZA2VhS3N5c3JWYk5sclNiRUltbWNEaHJlY01LNDh4dHV1YmZAleVZASS0c0UQZDZD';

const fetchInstagramFeed = async () => {
  try {
    const response = await axios.get('https://graph.instagram.com/me/media', {
      params: {
        fields: 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username',
        access_token: ACCESS_TOKEN
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Instagram feed:', error.response ? error.response.data : error.message);
    return [];
  }
};

const posts = ref([]);
const error = ref('');

const latestPosts = computed(() => {
  return posts.value.slice(0, 3);
});

onMounted(async () => {
  try {
    posts.value = await fetchInstagramFeed();
  } catch (err) {
    error.value = 'Failed to load Instagram feed.';
  }
});
</script>

<template>
  <section>


    <div class="instagram-feed">
      <h2 class="title-uppercase">Onze Instagram Showcase</h2>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-else class="feed">
        <div v-for="post in latestPosts" :key="post.id" class="post">
          <a :href="post.permalink" target="_blank">
            <template v-if="post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM'">
              <img :src="post.media_url" :alt="post.caption"/>
            </template>
            <template v-else-if="post.media_type === 'VIDEO'">
              <video controls>
                <source :src="post.media_url" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </template>
          </a>
          <!--          <p v-if="post.caption">{{ post.caption }}</p>-->
        </div>
      </div>
    </div>

    <button class="primary-button bold-weight">Volg ons voor meer updates!</button>

  </section>
</template>

<style scoped>

section {
  background-color: var(--background-dark-purple);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  color: var(--teriary-color-yellow);
  padding-bottom: 3rem;
  font-size: 3.5rem;
}

p {
  font-size: 1rem;
}

button {
  margin-top: 4rem;
}

.feed {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
}

.post {

  width: 300px;
}

.post img, .post video {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.error {
  color: red;
}

/* Media queries voor verschillende schermformaten */


/* TABLET */
@media screen and (max-width: 60rem) {
h2 {
  line-height: 4rem;
}

.feed {
  flex-direction: column;
  gap: 2rem;
}

}

/* MOBILE L */
@media screen and (max-width: 30rem) {

}

</style>
