<template>
  <div id="page-wrapper">
    <header>
      <slot name="header"></slot>
    </header>
    <aside id="side-bar">
      <slot name="side-bar"></slot>
    </aside>
    <section id="content">
      <slot name="content"></slot>
    </section>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
#page-wrapper {
  padding: 5px;
  widows: 960px;
  margin: 20px auto;
}
header {
  height: 100px;
  padding: 0 15px;
}
#content {
  width: 696px;
  float: left;
  padding: 5px 15px;
  min-height: 300px;
}
#side-bar {
  width: 200px;
  padding: 5px 15px;
  float: left;
}
footer {
  clear: both;
  padding: 0 15px;
}
@media screen and (max-width: 980px) {
  #page-wrapper {
    width: 94%;
  }
  #content {
    clear: both;
    padding: 1% 4%;
    width: auto;
    float: none;
  }
  #side-bar {
    clear: both;
    padding: 1% 4%;
    width: auto;
    float: none;
  }
  header,
  footer {
    padding: 1% 4%;
  }
}

/* 공통 스타일 */
#content {
  background-color: #f8f8f8;
}
#side-bar {
  background: #f0efef;
}
#header,
#content,
#middle,
#side-bar {
  margin-bottom: 5px;
}
#page-wrapper,
header,
#content,
#middle,
#side-bar,
footer {
  border: 1px solid #ccc;
}
</style>
