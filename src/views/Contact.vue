<template>
  <div class="about">
    <h1>Ne nous perdons pas de vue !</h1>
    <p>
      <v-card class="mx-auto ma-4">
        <v-card-text
          class="d-flex flex-column flex-md-row flex-sm-column justify-center align-center"
        >
          <a href="mailto:antoine.steyer@hey.com">
            <v-btn text color="rgb(85, 34, 250)">
              <v-icon left>mdi-email</v-icon>
              Email
            </v-btn>
          </a>
          <a href="https://twitter.com/ant_steyer">
            <v-btn text color="#1DA1F2">
              <v-icon left>mdi-twitter</v-icon>
              Twitter
            </v-btn>
          </a>
          <a href="https://www.linkedin.com/in/antsteyer/">
            <v-btn text color="#2867B2">
              <v-icon left>mdi-linkedin</v-icon>
              LinkedIn
            </v-btn>
          </a>

          <a href="https://github.com/antsteyer">
            <v-btn text color="#24292e">
              <v-icon left>mdi-github</v-icon>
              Github
            </v-btn>
          </a>
        </v-card-text>
      </v-card>
    </p>
  </div>
</template>
