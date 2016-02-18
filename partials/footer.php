</div> <!-- ajax -->
</div> <!-- ajax container -->
</div>
<div class="directions__popup">
	<div class="directions__popup__close" onclick="closeDirections()">
		<span class="directions__popup__close__line directions__popup__close__line--1"></span>
		<span class="directions__popup__close__line directions__popup__close__line--2"></span>
		<span class="directions__popup__close__line directions__popup__close__line--3"></span>
	</div>
	<form class="directions__popup__form" action="http://maps.google.com/maps" method="get" target="_blank">
	   <label class="directions__popup__form__label" for="saddr">Enter postcode or address</label>
	   <input class="directions__popup__form__input" type="text" name="saddr" />
	   <input type="hidden" name="daddr" value="Sys Systems, Foston" />
	   <input class="signup__button" type="submit" value="Get Directions" />
	</form>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.22/require.min.js"
		data-main="/innovation-showcase/assets/scripts/main"></script>
</body>
</html>
