<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const fetchInstagramFeed = async () => {
  const API_URL = "https://v1.nocodeapi.com/studiorqst/instagram/BCojmeILPamuZJUh";

  try {
    const response = await axios.get(API_URL);
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
                   <!-- <p v-if="post.caption">{{ post.caption }}</p> -->
        </div>
      </div>
    </div>
    <NuxtLink href="https://www.instagram.com/studio.rqst/">
      <button class="primary-button bold-weight">Volg ons voor meer updates!</button>
    </NuxtLink>
  </section>
</template>

<style scoped>

:root {
    --background-dark-purple: #45227A;
    --second-background: #7952B3;
    --primair-color-l-blue: #BEFBFF;
    --secundair-color-l-purple: #F6EFFF;
    --teriary-color-yellow: #F6FFBE;
}

section {
  background-color: var(--secundair-color-l-purple);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0;
}

h2 {
  color: var(--background-dark-purple);
  padding-bottom: 5rem;
  font-size: 4rem;
}

p {
  font-size: 1rem;
}

button {
  margin: auto;
  background-color: var(--second-background);
  color: var(--teriary-color-yellow);
  border: solid 2px var(--second-background);
  margin-top: 4rem;
}

button:hover {
  background-color: var(--secundair-color-l-purple);
  color: var(--second-background);
  border: solid 2px var(--second-background);
}

.feed {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

/* Media queries voor verschillende schermformaten */


/* TABLET */
@media screen and (max-width: 60rem) {
  h2 {
    line-height: 4rem;
  }

  .feed {
    gap: 2rem;
  }
}

@media screen and (max-width: 40rem) {
  h2 {
    font-size: 3rem;
    line-height: 3rem;
    margin: 0 1rem;
  }

  .feed {
    gap: 2rem;
  }
}
</style>