<script>
export default {
  props: ["cardTitle"]
}
</script>

<template>
  <div class="the-card">
    <div class="the-card__title">
        {{ cardTitle }}
    </div>
    <div class="the-card__body">
        <slot>
          Default card slot text.
        </slot>
    </div>
    <div class="the-card__footer">
      <slot name="footer">
        Default footer
      </slot>
    </div>
  </div>
</template>

<style>
.the-card{
    width: 200px;
    border: 1px solid red;
    min-height: 200px;;
    margin: 22px auto;
}

.the-card__title{
    background-color: aqua;
    padding: 5px 11px;
    color: #fff;
}
.the-card__body{
    padding: 11px;
}
.the-card__footer{
    background-color: blueviolet;
    padding: 5px 11px;
    text-align: center;
}
</style>